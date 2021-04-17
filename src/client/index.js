import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

import { checkForText } from './js/textChecker';
import { handleSubmit } from './js/formHandler';
import { execute } from './js/init';

//the function to execute all our functionalities
execute(handleSubmit, checkForText);


