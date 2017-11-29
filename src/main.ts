// Angular
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MainModule } from './app/main.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(MainModule)
  .then(success => console.log(`Bootstrap success`))
  .catch(err => console.error(err));