import customFontSizes from './fontSize';
import colors from './colors';
import { UiTextStylesType } from '../../types/shared-ui/text-styles';

const customTextStyles:UiTextStylesType = {
  headline_m: {
    fontSize: customFontSizes.headline_m,
    fontWeight: 700,
    lineHeight: '34px',
    letterSpacing: '-1%',
    color: colors.base.black,
  },
  headline_s: {
    fontSize: customFontSizes.headline_s,
    fontWeight: 700,
    lineHeight: '30px',
    letterSpacing: '-1%',
    color: colors.base.black,
  },
  title_l: {
    fontSize: customFontSizes.title_l,
    fontWeight: 700,
    lineHeight: '32px',
    color: colors.base.black,
  },
  title_m: {
    fontSize: customFontSizes.title_m,
    fontWeight: 700,
    lineHeight: '28px',
    color: colors.base.black,
  },
  title_s: {
    fontSize: customFontSizes.title_s,
    fontWeight: 700,
    lineHeight: '24px',
    color: colors.base.black,
  },
  body_l: {
    fontSize: customFontSizes.body_l,
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: '-0.01em',
    color: colors.base.black,
  },
  body_m: {
    fontSize: customFontSizes.body_m,
    fontWeight: 400,
    lineHeight: '20px',
    letterSpacing: '-0.01em',
    color: colors.base.black,
  },
  body_s: {
    fontSize: customFontSizes.body_s,
    fontWeight: 400,
    lineHeight: '18px',
    letterSpacing: '-0.01em',
    color: colors.base.black,
  },
  label_xl: {
    fontSize: customFontSizes.label_xl,
    fontWeight: 700,
    lineHeight: '20px',
    color: colors.base.black,
  },
  label_l: {
    fontSize: customFontSizes.label_l,
    fontWeight: 700,
    lineHeight: '18px',
    color: colors.base.black,
  },
  label_m: {
    fontSize: customFontSizes.label_m,
    fontWeight: 700,
    lineHeight: '16px',
    color: colors.base.black,
  },
  label_s: {
    fontSize: customFontSizes.label_s,
    fontWeight: 700,
    lineHeight: '14px',
    color: colors.base.black,
  },
};

export default customTextStyles;
