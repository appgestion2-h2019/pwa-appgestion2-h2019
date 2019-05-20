import * as gravatar from 'gravatar';

export class Usager {
    id: number;
    nomusager: string;
    courriel: string;
    googlecourriel: string;
    motdepasse: string;
    admin: boolean;
    actif: boolean;
    // connectee: boolean;

    constructor() {
    }
    /**
     * Fais une requête à Gravatar en utilisant l'adresse courriel de l'usager
     */
    avatar(): string {
        return gravatar.url(this.courriel, {s: '100', r: 'pg', d: 'wavatar'}, true);
    }
}
