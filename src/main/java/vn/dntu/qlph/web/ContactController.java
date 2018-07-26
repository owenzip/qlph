/**
 * @DNTU-LIBRARY application
 * @author Nhựt Nguyễn
 * @since 15/04/2018
 */
package vn.dntu.qlph.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import vn.dntu.qlph.model.ContactVO;
import vn.dntu.qlph.service.impl.ContactImpl;

import java.util.ArrayList;

@Controller
public class ContactController {

    @Autowired
    ContactImpl contactImpl;

    @RequestMapping(value = "/insertContact.do")
    @ResponseBody
    public boolean insertContact(@RequestParam("idVanDe") int idVanDe, @RequestParam("sdt") int sdt, @RequestParam("noiDung") String noiDung, @RequestParam("email") String email, @RequestParam("ten") String ten) {
        try {
            contactImpl.insertContact(idVanDe, sdt, noiDung, email, ten);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @RequestMapping(value = "/selectListContact.do")
    @ResponseBody
    public ArrayList<ContactVO> selectListProblem() {
        try {
            ArrayList<ContactVO> contactVO = contactImpl.selectListContact();
            return contactVO;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @RequestMapping(value = "/deleteContact.do")
    @ResponseBody
    public boolean deleteContact(@RequestParam("idLienHe") int idLienHe) {
        try {
            contactImpl.deleteContact(idLienHe);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

}
