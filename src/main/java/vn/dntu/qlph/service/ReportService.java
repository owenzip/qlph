/**
 * @DNTU-LIBRARY application
 * @author Nhựt Nguyễn
 * @since 15/04/2018
 */
package vn.dntu.qlph.service;

import org.apache.ibatis.annotations.Param;
import vn.dntu.qlph.model.CategoryVO;
import vn.dntu.qlph.model.ReportVO;

import java.util.ArrayList;
import java.util.List;

public interface ReportService {
    List<ReportVO> selectReportToday(@Param("ngayBatDau") String ngayBatDau, @Param("ngayKetThuc") String ngayKetThuc);

    List<ReportVO> selectReportRoom(@Param("idDmPhong") int idDmPhong, @Param("ngayBatDau") String ngayBatDau, @Param("ngayKetThuc") String ngayKetThuc);

    List<ReportVO> selectReportRoomDetail(@Param("idDmPhong") int idDmPhong, @Param("ngayBatDau") String ngayBatDau, @Param("ngayKetThuc") String ngayKetThuc);

    List<ReportVO> selectReportRoomDetailAll(@Param("ngayBatDau") String ngayBatDau, @Param("ngayKetThuc") String ngayKetThuc);
}
