import { ButtonComponent } from './styles';

export const Button = (props) => {
  return <ButtonComponent {...props}>{props.text}</ButtonComponent>;
};
