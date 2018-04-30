package vn.dntu.qlph.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.dntu.qlph.service.ContactService;


@Service("ContactImpl")
public class ContactImpl implements ContactService {

    @Autowired
    ContactService contactService;

    @Override
    public void insertContact(int idVanDe, int sdt, String noiDung,String email) {
        contactService.insertContact(idVanDe,sdt,noiDung,email);
    }
}
