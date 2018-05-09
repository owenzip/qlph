/**
 * @DNTU-LIBRARY application
 * @author Nhựt Nguyễn
 * @since 15/04/2018
 */
package vn.dntu.qlph.service;

import vn.dntu.qlph.model.CategoryVO;

import java.util.ArrayList;

public interface CategoryService {

    ArrayList<CategoryVO> selectListProblem();

    ArrayList<CategoryVO> selectListRoom();

    ArrayList<CategoryVO> selectListMajor();

    ArrayList<CategoryVO> selectListStatus();
}
