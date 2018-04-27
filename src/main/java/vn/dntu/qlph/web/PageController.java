package vn.dntu.qlph.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

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
    public String login() {
        return "login";
    }

    @RequestMapping(value = "/event.do",method = RequestMethod.GET)
    public String event() {
        return "event";
    }

    @RequestMapping(value = "/search.do",method = RequestMethod.GET)
    public String search() {
        return "searchbook";
    }

    @RequestMapping(value = "/room.do",method = RequestMethod.GET)
    public String room() { return "room"; }

    @RequestMapping(value = "/admin.do",method = RequestMethod.GET)
    public String admin() { return "admin"; }
}
