/**
 * @DNTU-LIBRARY application
 * @author Nhựt Nguyễn
 * @since 15/04/2018
 */
package vn.dntu.qlph.service;

import vn.dntu.qlph.model.CategoryVO;
import vn.dntu.qlph.model.ReportVO;

import java.util.ArrayList;
import java.util.List;

public interface ReportService {
    List<ReportVO> selectReportToday();
}
