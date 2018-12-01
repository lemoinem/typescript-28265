import { Observable } from 'rxjs';
import { myModule } from '@typescript-28265/test-module';

function myApp(): Observable<void>
{
    return myModule();
}
