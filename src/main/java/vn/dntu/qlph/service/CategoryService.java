package vn.dntu.qlph.service;

import vn.dntu.qlph.model.CategoryVO;

import java.util.ArrayList;

public interface CategoryService {
    ArrayList<CategoryVO> selectListProblem();
    ArrayList<CategoryVO> selectListRoom();
    ArrayList<CategoryVO> selectListMajor();
    ArrayList<CategoryVO> selectListStatus();
}