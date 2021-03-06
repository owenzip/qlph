/**
 * @DNTU-LIBRARY application
 * @author Nhựt Nguyễn
 * @since 15/04/2018
 */
package vn.dntu.qlph.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.dntu.qlph.model.CategoryVO;
import vn.dntu.qlph.service.CategoryService;

import java.util.ArrayList;

@Service("CategoryImpl")
public class CategoryImpl implements CategoryService {

    @Autowired
    CategoryService categoryService;

    @Override
    public ArrayList<CategoryVO> selectListProblem() {
        return categoryService.selectListProblem();
    }

    @Override
    public ArrayList<CategoryVO> selectListRoom() {
        return categoryService.selectListRoom();
    }

    @Override
    public ArrayList<CategoryVO> selectListMajor() {
        return categoryService.selectListMajor();
    }

    @Override
    public ArrayList<CategoryVO> selectListStatus() {
        return categoryService.selectListStatus();
    }
}
