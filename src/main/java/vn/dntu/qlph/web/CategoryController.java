package vn.dntu.qlph.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import vn.dntu.qlph.model.CategoryVO;
import vn.dntu.qlph.service.impl.CategoryImpl;

import java.util.ArrayList;

@Controller
public class CategoryController {

    @Autowired
    CategoryImpl categoryImpl;

    @RequestMapping(value = "/selectListProblem.do")
    @ResponseBody
    public ArrayList<CategoryVO> selectListProblem() {
        try {
            ArrayList<CategoryVO> categoryVO = categoryImpl.selectListProblem();
            return categoryVO;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @RequestMapping(value = "/selectListStatus.do")
    @ResponseBody
    public ArrayList<CategoryVO> selectListStatus() {
        try {
            ArrayList<CategoryVO> categoryVO = categoryImpl.selectListStatus();
            return categoryVO;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @RequestMapping(value = "/selectListRoom.do")
    @ResponseBody
    public ArrayList<CategoryVO> selectListRoom() {
        try {
            ArrayList<CategoryVO> categoryVO = categoryImpl.selectListRoom();
            return categoryVO;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @RequestMapping(value = "/selectListMajor.do")
    @ResponseBody
    public ArrayList<CategoryVO> selectListMajor() {
        try {
            ArrayList<CategoryVO> categoryVO = categoryImpl.selectListMajor();
            return categoryVO;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

}
