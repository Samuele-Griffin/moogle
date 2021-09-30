import { Name } from "./name.model";
import { Currency } from './currency.model';
import { Translation } from "./translation.model";
import { Languages } from "./language.model";
import { Idd } from "./idd.model";
import { Demonyms } from "./demonys.model";

export interface Pais{
    name:         Name;
    tld:          string[];
    cca2:         string;
    ccn3:         string;
    cca3:         string;
    cioc?:        string;
    independent:  boolean;
    status:       string;
    unMember:     boolean;
    currencies:   { [key: string]: Currency };
    idd:          Idd;
    capital:      string[];
    altSpellings: string[];
    region:       string;
    subregion:    string;
    languages:    Languages;
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    area:         number;
    flag:         string;
    flags:        string[];
    demonyms:     Demonyms;
    borders?:     string[];
}