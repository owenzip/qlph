/**
 * @DNTU-LIBRARY application
 * @author Nhựt Nguyễn
 * @since 15/04/2018
 */
package vn.dntu.qlph.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.dntu.qlph.model.CategoryVO;
import vn.dntu.qlph.model.ReportVO;
import vn.dntu.qlph.service.CategoryService;
import vn.dntu.qlph.service.ReportService;

import java.util.ArrayList;
import java.util.List;

@Service("ReportService")
public class ReportImpl implements ReportService {

    @Autowired
    ReportService reportService;

    @Override
    public List<ReportVO> selectReportToday() {
        return reportService.selectReportToday();
    }
}
