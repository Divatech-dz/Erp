import { authFormSchema } from '@/lib/utils';
import { AuthType } from '@/constants';

export const formSchema = authFormSchema(AuthType.SignIn);
