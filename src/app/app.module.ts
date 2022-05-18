import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './pages/statistiques/page-statistiques.component';
import { MenuComponent } from './composants/menu/menu.component';
import { HeaderComponent } from './composants/header/header.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { DetailArticleComponent } from './composants/detail-article/detail-article.component';
import { PaginationComponent } from './composants/pagination/pagination.component';
import { BoutonActionComponent } from './composants/bouton-action/bouton-action.component';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { PageMvtstkComponent } from './pages/mvtstk/page-mvtstk/page-mvtstk.component';
import { DetailMvtStkArticleComponent } from './composants/detail-mvt-stk-article/detail-mvt-stk-article.component';
import { DetailMvtStkComponent } from './composants/detail-mvt-stk/detail-mvt-stk.component';
import { DetailCltFrsComponent } from './composants/detail-clt-frs/detail-clt-frs.component';
import { PageClientComponent } from './pages/client/page-client/page-client.component';
import { PageFournisseurComponent } from './pages/fournisseur/page-fournisseur/page-fournisseur.component';
import { NouveauCltFrsComponent } from './composants/nouveau-clt-frs/nouveau-clt-frs.component';
import { DetailCommandesCltFrsComponent } from './composants/detail-commandes-clt-frs/detail-commandes-clt-frs.component';
import { DetailCmdComponent } from './composants/detail-cmd/detail-cmd.component';
import { PageCmdCltFrsComponent } from './pages/page-cmd-clt-frs/page-cmd-clt-frs.component';
import { NouvelleCmdCltFrsComponent } from './composants/nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs.component';
import { PageCategoriesComponent } from './pages/categories/page-categories/page-categories.component';
import { NouvelleCategoryComponent } from './pages/categories/nouvelle-category/nouvelle-category.component';
import { DetailUtilisateurComponent } from './composants/detail-utilisateur/detail-utilisateur.component';
import { PageUtilisateursComponent } from './pages/utilisateur/page-utilisateurs/page-utilisateurs.component';
import { NouvelUtilisateurComponent } from './pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { ChangerMotDePasseComponent } from './pages/profil/changer-mot-de-passe/changer-mot-de-passe.component';
import { FormsModule } from '@angular/forms';
import { CategoryService } from './category.service';
import { UpdateCategoryComponent } from './pages/categories/update-category/update-category.component';
import { CategoryDetailsComponent } from './pages/categories/category-details/category-details.component';
import { DetailFrsComponent } from './composants/detail-frs/detail-frs.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { DetailClientComponent } from './detail-client/detail-client.component';
import { VueEnsembleComponent } from './vue-ensemble/vue-ensemble.component';
import { CreateFournisseurComponent } from './create-fournisseur/create-fournisseur.component';
import { UpdateFournisseurComponent } from './update-fournisseur/update-fournisseur.component';
import { DtailFournisseurComponent } from './dtail-fournisseur/dtail-fournisseur.component';
import { DtailArticleComponent } from './dtail-article/dtail-article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { CreateCommandeClientComponent } from './create-commande-client/create-commande-client.component';
import { DtailCommandeClientComponent } from './dtail-commande-client/dtail-commande-client.component';
import { UpdateCommandeClientComponent } from './update-commande-client/update-commande-client.component';
import { PageCommandeFournisseursComponent } from './page-commande-fournisseurs/page-commande-fournisseurs.component';
import { NouvelleCommandeFournisseurComponent } from './nouvelle-commande-fournisseur/nouvelle-commande-fournisseur.component';
import { DtailCommandeFournisseurComponent } from './dtail-commande-fournisseur/dtail-commande-fournisseur.component';
import { UpdateCommandeFournisseurComponent } from './update-commande-fournisseur/update-commande-fournisseur.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DtailUserComponent } from './dtail-user/dtail-user.component';

@NgModule({
  declarations: [
    AppComponent,
    PageInscriptionComponent,
    PageLoginComponent,
    PageDashboardComponent,
    PageStatistiquesComponent,
    MenuComponent,
    HeaderComponent,
    PageArticleComponent,
    DetailArticleComponent,
    PaginationComponent,
    BoutonActionComponent,
    NouvelArticleComponent,
    PageMvtstkComponent,
    DetailMvtStkArticleComponent,
    DetailMvtStkComponent,
    DetailCltFrsComponent,
    PageClientComponent,
    PageFournisseurComponent,
    NouveauCltFrsComponent,
    DetailCommandesCltFrsComponent,
    DetailCmdComponent,
    PageCmdCltFrsComponent,
    NouvelleCmdCltFrsComponent,
    PageCategoriesComponent,
    NouvelleCategoryComponent,
    DetailUtilisateurComponent,
    PageUtilisateursComponent,
    NouvelUtilisateurComponent,
    PageProfilComponent,
    ChangerMotDePasseComponent,
    UpdateCategoryComponent,
    CategoryDetailsComponent,
    DetailFrsComponent,
    UpdateClientComponent,
    DetailClientComponent,
    VueEnsembleComponent,
    CreateFournisseurComponent,
    UpdateFournisseurComponent,
    DtailFournisseurComponent,
    DtailArticleComponent,
    UpdateArticleComponent,
    CreateCommandeClientComponent,
    DtailCommandeClientComponent,
    UpdateCommandeClientComponent,
    PageCommandeFournisseursComponent,
    NouvelleCommandeFournisseurComponent,
    DtailCommandeFournisseurComponent,
    UpdateCommandeFournisseurComponent,
    UpdateUserComponent,
    DtailUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    HttpClientModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
