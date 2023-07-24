import HelloWorldButton from './components/hello-world-button/hello-world-button';
import Heading from './components/heading/heading';
import _ from 'lodash';

const helloWorld = new HelloWorldButton();
const heading = new Heading();

heading.render(_.upperFirst('hello world'));
helloWorld.render();
