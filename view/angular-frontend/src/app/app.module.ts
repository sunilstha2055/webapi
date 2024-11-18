import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent], // Declare the AppComponent here
  imports: [BrowserModule, HttpClientModule], // Import necessary modules
  providers: [],
  bootstrap: [AppComponent] // Specify the AppComponent as the bootstrap component
})
export class AppModule {}
