import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { UploadComponent } from './upload.component';
import { DropzoneComponent } from './dropzone/dropzone.component';
import { SelectDemoFilesComponent } from './select-demo-files/select-demo-files.component';
import { BrowseFilesComponent } from './browse-files/browse-files.component';
import { CoreModule } from '../core/core.module';

export const routes: Route[] = [
  {
    path: '',
    component: UploadComponent,
  },
];

@NgModule({
  declarations: [
    UploadComponent,
    DropzoneComponent,
    SelectDemoFilesComponent,
    BrowseFilesComponent,
  ],
  imports: [CoreModule, RouterModule.forChild(routes)],
})
export class UploadModule {}
