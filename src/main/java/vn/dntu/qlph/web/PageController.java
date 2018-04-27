package vn.dntu.qlph.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
public class PageController {

    @RequestMapping(value = "/",method = RequestMethod.GET)
    public String index() {
        return "index";
    }

    @RequestMapping(value = "/index.do",method = RequestMethod.GET)
    public String indexRoot() {
        return "index";
    }

    @RequestMapping(value = "/login.do",method = RequestMethod.GET)
    public String login(HttpServletRequest request) {
        HttpSession session = request.getSession();
        session.invalidate();
        return "login";
    }

    @RequestMapping(value = "/event.do",method = RequestMethod.GET)
    public String event() {
        return "event";
    }

    @RequestMapping(value = "/search.do",method = RequestMethod.GET)
    public String search(HttpServletRequest request) {
        try {
            HttpSession session = request.getSession();
            String username = session.getAttribute("TENNGUOIDUNG").toString();
            if (username != null) {
                return "searchbook";
            }
            return "login";
        } catch (Exception e) {
            e.printStackTrace();
            return "login";
        }
    }

    @RequestMapping(value = "/room.do",method = RequestMethod.GET)
    public String room(HttpServletRequest request) {
        try {
            HttpSession session = request.getSession();
            String username = session.getAttribute("TENNGUOIDUNG").toString();
            if (username != null) {
                return "room";
            }
            return "login";
        } catch (Exception e) {
            e.printStackTrace();
            return "login";
        }
    }

    @RequestMapping(value = "/admin.do",method = RequestMethod.GET)
    public String admin(HttpServletRequest request) {
        try {
            HttpSession session = request.getSession();
            String username = session.getAttribute("TENNGUOIDUNG").toString();
            int role = (int) session.getAttribute("QUYEN");
            if (username != null && role == 1) {
                return "admin";
            } else if (username != null && role != 1) {
                return "401";
            }
            return "401";
        } catch (Exception e) {
            e.printStackTrace();
            return "401";
        }
    }

    @RequestMapping(value = "/logout.do", method = RequestMethod.GET)
    public String logOut(HttpServletRequest request) {
        HttpSession session = request.getSession();
        session.invalidate();
        return "index";
    }
}
