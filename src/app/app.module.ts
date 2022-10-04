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
import { PageCmdClientFournisseurComponent } from './pages/page-cmd-client-fournisseur/page-cmd-client-fournisseur/page-cmd-client-fournisseur.component';
import { NewCmdClientFournisseurComponent } from './components/new-cmd-client-fournisseur/new-cmd-client-fournisseur.component';
import { PageCategoriesComponent } from './pages/categories/page-categories/page-categories.component';
import { NouvelleCategorieComponent } from './pages/categories/nouvelle-categorie/nouvelle-categorie.component';
import { DetailUtilisateurComponent } from './components/detail-utilisateur/detail-utilisateur.component';
import { PageUtilisateursComponent } from './pages/utilisateur/page-utilisateurs/page-utilisateurs.component';
import { NouvelUtilisateurComponent } from './pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur.component';
import { ChangerPasswordComponent } from './pages/profil/changer-password/changer-password.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';

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
    PageCmdClientFournisseurComponent,
    NewCmdClientFournisseurComponent,
    PageCategoriesComponent,
    NouvelleCategorieComponent,
    DetailUtilisateurComponent,
    PageUtilisateursComponent,
    NouvelUtilisateurComponent,
    ChangerPasswordComponent,
    PageProfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
