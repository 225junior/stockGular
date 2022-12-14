import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCmdClientFournisseurComponent } from './components/new-cmd-client-fournisseur/new-cmd-client-fournisseur.component';
import { NouveauClientFournisseurComponent } from './components/nouveau-client-fournisseur/nouveau-client-fournisseur.component';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { NouvelleCategorieComponent } from './pages/categories/nouvelle-categorie/nouvelle-categorie.component';
import { PageCategoriesComponent } from './pages/categories/page-categories/page-categories.component';
import { MoveStockComponent } from './pages/move-stock/move-stock/move-stock.component';
import { PageClientComponent } from './pages/page-client/page-client/page-client.component';
import { PageCmdClientFournisseurComponent } from './pages/page-cmd-client-fournisseur/page-cmd-client-fournisseur/page-cmd-client-fournisseur.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageFournisseurComponent } from './pages/page-fournisseur/page-fournisseur/page-fournisseur.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { ChangerPasswordComponent } from './pages/profil/changer-password/changer-password.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { NouvelUtilisateurComponent } from './pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur.component';
import { PageUtilisateursComponent } from './pages/utilisateur/page-utilisateurs/page-utilisateurs.component';
import { constantes } from './shared/consts';


const routes: Routes = [
  {
    path: 'login', component: PageLoginComponent
  },
  {
    path: 'register', component: PageInscriptionComponent
  },
  {
    path: '', component: PageDashboardComponent,
    children: [
      { path: 'dashboard', component: PageDashboardComponent },
      { path: 'statistiques', component: PageStatistiquesComponent },
      { path: 'articles', component: PageArticleComponent },
      { path: 'nouvel-article', component: NouvelArticleComponent },
      { path: 'move-stock', component: MoveStockComponent },

      { path: 'clients', component: PageClientComponent },
      { path: 'nouveau-client', component: NouveauClientFournisseurComponent, data: { origin: constantes.CLIENT } },
      { path: 'commande-client', component: PageCmdClientFournisseurComponent, data: { origin: constantes.CLIENT } },
      { path: 'nouvelle-commande-client', component: NewCmdClientFournisseurComponent, data: { origin: constantes.CLIENT } },

      { path: 'fournisseurs', component: PageFournisseurComponent },
      { path: 'nouveau-fournisseur', component: NouveauClientFournisseurComponent, data: { origin: constantes.FOURNISSEUR } },
      { path: 'commande-fournisseur', component: PageCmdClientFournisseurComponent, data: { origin: constantes.FOURNISSEUR } },
      { path: 'nouvelle-commande-fournisseur', component: NewCmdClientFournisseurComponent, data: { origin: constantes.FOURNISSEUR } },

      { path: 'categories', component: PageCategoriesComponent },
      { path: 'nouvelle-categorie', component: NouvelleCategorieComponent },

      { path: 'utilisateurs', component: PageUtilisateursComponent },
      { path: 'nouvel-utilisateur', component: NouvelUtilisateurComponent },

      { path: 'changer-Password', component: ChangerPasswordComponent },
      { path: 'profil', component: PageProfilComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
