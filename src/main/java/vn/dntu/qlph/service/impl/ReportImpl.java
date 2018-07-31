/**
 * @DNTU-LIBRARY application
 * @author Nhựt Nguyễn
 * @since 15/04/2018
 */
package vn.dntu.qlph.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.dntu.qlph.model.ReportVO;
import vn.dntu.qlph.service.ReportService;

import java.util.List;


@Service("ReportService")
public class ReportImpl implements ReportService {

    @Autowired
    ReportService reportService;

    @Override
    public List<ReportVO> selectReportToday(String ngayBatDau, String ngayKetThuc) {
        return reportService.selectReportToday(ngayBatDau, ngayKetThuc);
    }

    @Override
    public List<ReportVO> selectReportRoom(int idDmPhong, String ngayBatDau, String ngayKetThuc) {
        return reportService.selectReportRoom(idDmPhong, ngayBatDau, ngayKetThuc);
    }

    @Override
    public List<ReportVO> selectReportRoomDetail(int idDmPhong, String ngayBatDau, String ngayKetThuc) {
        return reportService.selectReportRoomDetail(idDmPhong, ngayBatDau, ngayKetThuc);
    }

    @Override
    public List<ReportVO> selectReportRoomDetailAll(String ngayBatDau, String ngayKetThuc) {
        return reportService.selectReportRoomDetailAll(ngayBatDau, ngayKetThuc);
    }
}
