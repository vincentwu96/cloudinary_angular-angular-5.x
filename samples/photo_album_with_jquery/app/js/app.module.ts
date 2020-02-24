'use strict';
// Angular modules
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
// Cloudinary module
import {CloudinaryModule, CloudinaryConfiguration, provideCloudinary} from '@cloudinary/angular-5.x';
// App modules
import {AppComponent} from './app.component';
import {PhotoListComponent} from './photo-list/photo-list.component';
import {PhotoUploadJqueryComponent} from './photo-album/photo-upload-jquery.component';
import {PhotoAlbum} from './model/photo-album.service';
import cloudinaryConfiguration from './config';
import {routing} from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        CloudinaryModule,
        routing
    ],
    declarations: [
        AppComponent,
        PhotoListComponent,
        PhotoUploadJqueryComponent
    ],
    providers: [
        PhotoAlbum,
        provideCloudinary(require('cloudinary-jquery-file-upload'),
            cloudinaryConfiguration as CloudinaryConfiguration)
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
