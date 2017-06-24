import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http'
import { MaterialModule } from '@angular/material'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { EffectsModule } from '@ngrx/effects'
import { LazyLoadImageModule } from 'ng-lazyload-image'
import { InfiniteScrollModule } from 'angular2-infinite-scroll'
import { Reducers, Services, Effects } from './services'
import { ViewComponents } from './views'
import Components from './components'
import MainComponents from './main'
import AppRoutingModule from './router'
import Pipes from './pipes'

const imports = [
  BrowserModule,
  HttpModule,
  StoreModule.provideStore(Reducers),
  EffectsModule.run(Effects),
  MaterialModule,
  LazyLoadImageModule,
  InfiniteScrollModule,
  AppRoutingModule,
]

if (process.env.NODE_ENV !== 'production') {
  const devtools = StoreDevtoolsModule.instrumentOnlyWithExtension({
    maxAge: 5,
  })
  imports.push(devtools)
}

@NgModule({
  imports,
  declarations: [
    MainComponents,
    ...ViewComponents,
    ...Components,
    ...Pipes,
  ],
  providers: [ Services ],
  bootstrap: [ MainComponents ],
})

class AppModule { }

export default AppModule
