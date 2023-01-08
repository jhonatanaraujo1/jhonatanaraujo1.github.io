import {Injectable} from '@angular/core';
// @ts-ignore
import {SendgridDto} from '../../dto/sendgrid.dto';
import axios from 'axios';

@Injectable()
export class SendgridService {

  constructor() {
  }

  sendOrcamento = (dto: SendgridDto) => {
    console.log(dto.name + ' '+ dto.toEmail + ' '+ dto.text)
    return axios.post('http://localhost:3030/sendGrid', {
      dto
    })
  }
}
