require('module-alias/register');

import { PlainPerson } from '@root/PlainPerson';
import { TypedPerson } from '@root/TypedPerson';

const plainPerson = new PlainPerson();
const typedPerson = new TypedPerson();

plainPerson.say();
typedPerson.say();
