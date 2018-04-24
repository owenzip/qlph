package vn.dntu.qlph.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class PageController {

    @RequestMapping(value = "/",method = RequestMethod.GET)
    public String loginPage() {
        return "index";
    }

    @RequestMapping(value = "/qltv",method = RequestMethod.GET)
    public String loginPageRoot() {
        return "index";
    }

    @RequestMapping(value = "/qltv/homepage.do",method = RequestMethod.GET)
    public String homePage() { return "homepage"; }
}
