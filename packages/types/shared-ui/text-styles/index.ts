export interface ITextProperty {
  fontSize?: string
  fontWeight?: number
  lineHeight?: string
  letterSpacing?: string
  color?: string
  cursor?: string
}

export type TextStylesType =
  'headline_m'|'headline_s'|
  'title_l' | 'title_m'| 'title_s'|
  'body_l'|'body_m'|'body_s'|
  'label_xl' |'label_l'|'label_m'|'label_s'

export type UiTextStylesType = {[key in TextStylesType]: ITextProperty}
