import glamorous from 'glamorous';
import './Card.scss';

export const Card = glamorous.div('mdc-card', {
  padding: '10px 20px',
});
export const CardMedia = glamorous.div('mdc-card__media');
export const CardContent = glamorous.div('mdc_card__content');
export const CardAction = glamorous.div('mdc-card__primary-action');
