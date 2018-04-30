package vn.dntu.qlph.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import vn.dntu.qlph.service.impl.ContactImpl;

@Controller
public class ContactController {

    @Autowired
    ContactImpl contactImpl;

    @RequestMapping(value = "/insertContact.do")
    @ResponseBody
    public boolean insertContact(@RequestParam("idVanDe") int idVanDe, @RequestParam("sdt") int sdt,@RequestParam("noiDung") String noiDung,@RequestParam("email") String email) {
        try {
            contactImpl.insertContact(idVanDe,sdt,noiDung,email);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

}
