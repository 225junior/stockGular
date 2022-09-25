import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { DetailArticleComponent } from './components/detail-article/detail-article.component';
import { BouttonActionComponent } from './components/boutton-action/boutton-action.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { MoveStockComponent } from './pages/move-stock/move-stock/move-stock.component';
import { DetailMouveStockArticleComponent } from './components/detail-mouve-stock-article/detail-mouve-stock-article.component';
import { DetailMouveStockComponent } from './components/detail-mouve-stock/detail-mouve-stock.component';
import { DetailClientsFournisseursComponent } from './components/detail-clients-fournisseurs/detail-clients-fournisseurs.component';
import { PageClientComponent } from './pages/page-client/page-client/page-client.component';
import { PageFournisseurComponent } from './pages/page-fournisseur/page-fournisseur/page-fournisseur.component';
import { NouveauClientFournisseurComponent } from './components/nouveau-client-fournisseur/nouveau-client-fournisseur.component';
import { DetailCmdCltFournComponent } from './components/detail-cmd-clt-fourn/detail-cmd-clt-fourn.component';
import { DetailCmdComponent } from './components/detail-cmd/detail-cmd.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageInscriptionComponent,
    PageDashboardComponent,
    PageStatistiquesComponent,
    MenuComponent,
    HeaderComponent,
    PageArticleComponent,
    DetailArticleComponent,
    BouttonActionComponent,
    PaginationComponent,
    NouvelArticleComponent,
    MoveStockComponent,
    DetailMouveStockArticleComponent,
    DetailMouveStockComponent,
    DetailClientsFournisseursComponent,
    PageClientComponent,
    PageFournisseurComponent,
    NouveauClientFournisseurComponent,
    DetailCmdCltFournComponent,
    DetailCmdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    // MenuComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
