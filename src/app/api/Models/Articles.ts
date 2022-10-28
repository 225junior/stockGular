export interface Articles {
    id: number;
    code: string;
    designation?: string;
    puHt?: number;
    puTtc?: number;
    tauxTva?: number;
    photo: string;
    entrepriseId: number;
    categoryId: number;
    // ligneVentes?: Array<LigneVente>;
    // ligneCommandeClients?: Array<LigneCommandeClient>;
    // ligneCommandeFournisseurs?: Array<LigneCommandeFournisseur>;
    // mvtStks?: Array<MvtStk>;
    create_at?: number;
    updated_at?: number;
}