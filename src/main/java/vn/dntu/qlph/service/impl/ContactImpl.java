/**
 * @DNTU-LIBRARY application
 * @author Nhựt Nguyễn
 * @since 15/04/2018
 */
package vn.dntu.qlph.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.dntu.qlph.model.ContactVO;
import vn.dntu.qlph.service.ContactService;

import java.util.ArrayList;

@Service("ContactImpl")
public class ContactImpl implements ContactService {

    @Autowired
    ContactService contactService;

    @Override
    public void insertContact(int idVanDe, int sdt, String noiDung, String email,String ten) {
        contactService.insertContact(idVanDe, sdt, noiDung, email, ten);
    }

    @Override
    public ArrayList<ContactVO> selectListContact() {
        return contactService.selectListContact();
    }
}
