// module-alias 를 사용할 수 있도록 등록해 준다.
require('module-alias/register');

import { PlainPerson } from '@root/PlainPerson';
import { TypedPerson } from '@root/TypedPerson';

const plainPerson = new PlainPerson();
const typedPerson = new TypedPerson();

plainPerson.say();
typedPerson.say();
