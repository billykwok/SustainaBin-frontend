// @flow
import { css } from 'styled-components';

const SIZE = {
  XS: 368,
  SM: 544,
  MD: 720,
  ML: 848,
  LG: 1024,
  XL: 1200,
  MX: 1380
};

const SIZE_ORDER = ['XS', 'SM', 'MD', 'ML', 'LG', 'XL', 'MX'];

type Size = $Keys<typeof SIZE>;

class Media {
  query: Array<string> = [];

  fromWidth(width: Size | number): Media {
    this.query.push(
      `(min-width: ${(typeof width === 'string' ? SIZE[width] : width) /
        16}rem)`
    );
    return this;
  }

  toWidth(width: Size | number): Media {
    this.query.push(
      `(max-width: ${(typeof width === 'string' ? SIZE[width] - 1 : width) /
        16}rem)`
    );
    return this;
  }

  fromHeight(h: number): Media {
    this.query.push(`(min-height: ${h / 16}rem)`);
    return this;
  }

  toHeight(h: number): Media {
    this.query.push(`(max-height: ${h / 16}rem)`);
    return this;
  }

  css(...args: Array<any>): Array<any> {
    return css`
      @media ${this.query.join(' and ')} {
        ${css(...args)};
      }
    `;
  }
}

const mq = {
  fromWidth(w: Size | number): Media {
    return new Media().fromWidth(w);
  },
  toWidth(w: Size | number): Media {
    return new Media().toWidth(w);
  },
  fromHeight(h: number): Media {
    return new Media().fromHeight(h);
  },
  toHeight(h: number): Media {
    return new Media().toHeight(h);
  },
  square(...widthArray: Array<string>) {
    return generateResponsiveCSS(['width', widthArray], ['height', widthArray]);
  },
  width(...widthArray: Array<string>) {
    return generateResponsiveCSS(['width', widthArray]);
  },
  style(styleKey: string, widthArray: Array<string>) {
    return generateResponsiveCSS([styleKey, widthArray]);
  },
  properties(styles: { [styleName: string]: Array<string> }): string {
    return generateResponsiveCSS(...Object.entries(styles));
  }
};

function generateResponsiveCSS(...mediaEntries) {
  let output = '';
  for (let i = 0; i <= 7; ++i) {
    const inner = innerCSS(
      mediaEntries.map(entry => [entry[0], entry[1][i] || null])
    );
    if (inner === '') continue;
    if (i) output += `@media (min-width:${SIZE[SIZE_ORDER[i - 1]] / 16}rem){`;
    output += inner;
    if (i) output += '}';
  }
  return css([output]);
}

function innerCSS(styleEntries) {
  return styleEntries
    .map(
      entry =>
        entry[1] &&
        entry[0].replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase() +
          ':' +
          entry[1] +
          ';'
    )
    .filter(result => result)
    .join('');
}

export default mq;
