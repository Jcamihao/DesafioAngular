import { Perfil } from './../perfil/perfil';
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'filterByName' })

export class FilterByName implements PipeTransform {

  transform(perfil: Perfil[], nomeQuery: string) {
    nomeQuery = nomeQuery.trim().toLowerCase();

    if (nomeQuery) {
      return perfil.filter(perfil => perfil.name
        .toLowerCase()
        .includes(nomeQuery))
    } else {
      return perfil;
    }
  }

}
