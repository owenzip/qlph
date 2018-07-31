/**
 * @DNTU-LIBRARY application
 * @author Nhựt Nguyễn
 * @since 15/04/2018
 */
$(function () {
    let setup = function () {
        datePicker();
        getCurrentDate();
        onClickConvertTab();
        onClickMenuRoom();
        configTableContactAdmin();
        configTableRoomAdmin();
        onClickTabEffect();
        selectCategoryRoom();
        $('#btnFilterDate').trigger('click');

        $('#btnCustom').on('click', function () {
            $('#tblExport caption').find('button').trigger('click');
        })
    };

    let onClickTabEffect = function () {
        $('#formTabStatis .nav-item').find('.active').addClass('btn btn-red');
        $('#formTabStatis .nav-item').on('click', function () {
            $('#formTabStatis').find('.active').removeClass('btn btn-red');
            $(this).find('a').addClass('btn btn-red');
        })
    };

    let onClickConvertTab = function () {
        $('#formTabRoom,#formTabCategory,#formTabStatis').hide();
        $('.btnTabRoom').on('click', function () {
            $('#formTabRoom').show();
            $('#formTabCategory,#formTabStatis,#formTabMail').hide();
        })
        $('.btnTabStatis').on('click', function () {
            $('#formTabStatis').show();
            $('#formTabRoom,#formTabCategory,#formTabMail').hide();
        })
        $('.btnTabMail').on('click', function () {
            $('#formTabMail').show();
            $('#formTabRoom,#formTabCategory,#formTabStatis').hide();
        })
    };

    let configTableRoomAdmin = function () {
        $.ajax({
            url: "/selectAllRoom.do",
            data: {
                trangThai: $('#trangThai').val(),
            },
            type: "POST",
            success: function (data) {
                if (data) {
                    let html = '';
                    $.each(data, function (index, item) {
                        html += '<tr onclick="onClickTableRoomAdmin(' + item.idPhong + ')">';
                        html += '<td class="text-center">' + (index + 1) + '</td>'
                        html += '<td>' + item.tenPhong + '</td>';
                        html += '<td>' + item.tenNguoiDaiDien + '</td>';
                        html += '<td class="text-center">' + item.dienThoai + '</td>';
                        html += '<td class="text-center">' + item.ngay + '</td>';
                        html += '<td class="text-center">' + item.gioBatDau + " - " + item.gioKetThuc + '</td>';
                        html += '<td class="text-center">' + item.soNguoi + '</td>';
                        html += '<td>' + item.mucDich + '</td>';
                        html += '<td><span class="badge badge-danger" style="background-color: #dc3545 !important; padding: 5px">' + item.trangThai + '</span></td>';
                        html += '</tr>';
                    })
                    if (html != '') {
                        $('#tblRoomAdmin').html(html);
                    } else {
                        $('#tblRoomAdmin').html('<tr><td colspan="9" class="text-center">Không tìm thấy dữ liệu</td></tr>')
                    }
                }
            }
        })
    };

    let configTableContactAdmin = function () {
        $.ajax({
            url: "/selectListContact.do",
            data: {},
            type: "POST",
            success: function (data) {
                if (data) {
                    let html = '';
                    $.each(data, function (index, item) {
                        html += '<tr>';
                        html += '<td class="text-center">' + (index + 1) + '</td>'
                        html += '<td>' + item.ten + '</td>';
                        html += '<td>' + item.vanDe + '</td>';
                        html += '<td class="text-center">' + item.sdt + '</td>';
                        html += '<td class="text-center">' + item.email + '</td>';
                        html += '<td class="text-center">' + item.ngay + '</td>';
                        html += '<td class="text-center">' + item.gio + '</td>';
                        html += '<td class="text-center" style="padding: 0"><button onclick="onClickMessageContact(\'' + item.noiDung + '\')" class="btn btn-red" style="padding: 8px 10px 8px 10px; margin-top: 10px;"><i class="fa fa-commenting-o"></i></td>';
                        html += '<td class="text-center" style="padding: 0"><button onclick="deleteContact(' + item.idLienHe + ');" class="btn btn-red" style="padding: 8px 10px 8px 10px; margin-top: 10px;"><i class="fa fa-trash"></i></td>';
                        html += '</tr>';
                    })
                    if (html != '') {
                        $('#tblContactAdmin').html(html);
                    } else {
                        $('#tblContactAdmin').html('<tr><td colspan="8" class="text-center">Không tìm thấy dữ liệu</td></tr>')
                    }
                }
            }
        })
    };

    this.onClickMessageContact = function (noiDung) {
        $('#modalSelectContact').modal('show');
        $('#areMessage').val(noiDung);
    };

    this.deleteContact = function (idLienHe) {
        $.confirm({
            title: 'Bạn có chắc chắn muốn xóa liên hệ này ?', content: '', type: 'red', typeAnimated: true,
            buttons: {
                cancel: {
                    text: 'Không',
                    btnClass: 'btn-red',
                },
                confirm: {
                    text: 'Có',
                    btnClass: 'btn-red',
                    action: function () {
                        $.ajax({
                            url: "/deleteContact.do",
                            data: {
                                'idLienHe': idLienHe
                            },
                            type: "POST",
                            success: function (data) {
                                if (data) {
                                    $.confirm({
                                        title: 'Xóa liên hệ thành công',
                                        content: '',
                                        type: 'red',
                                        typeAnimated: true,
                                        buttons: {
                                            cancel: {
                                                text: 'Xác nhận',
                                                btnClass: 'btn-red',
                                                action: function () {
                                                    configTableContactAdmin();
                                                }
                                            },
                                        }
                                    });
                                } else {
                                    $.confirm({
                                        title: 'Xóa liên hệ thất bại',
                                        content: 'Xin vui lòng thử lại hoặc liên hệ ban quản trị',
                                        type: 'red',
                                        typeAnimated: true,
                                        buttons: {
                                            cancel: {
                                                text: 'Thử lại',
                                                btnClass: 'btn-red',
                                            },
                                        }
                                    });
                                }
                            }
                        })
                    }
                },
            }
        });
    };

    this.onClickTableRoomAdmin = function (idPhong) {
        $('#idPhong').val(idPhong);
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
        $('#modalSelectRoom').modal('show');
        $.ajax({
            url: "/selectMembersByRoom.do",
            data: {
                idPhong: idPhong,
            },
            type: "POST",
            success: function (data) {
                if (data) {
                    let html = '';
                    $.each(data, function (index, item) {
                        html += '<tr>';
                        html += '<td class="text-center">' + (index + 1) + '</td>'
                        html += '<td>' + item.tenNguoiDungDetails + '</td>';
                        html += '<td>' + item.lopDetails + '</td>';
                        html += '<td class="text-center">' + item.mssvDetails + '</td>';
                        html += '</tr>'
                    })
                    if (html != '') {
                        $('#tblMemberRoomAdmin').html(html);
                    } else {
                        $('#tblMemberRoomAdmin').html('<tr><td colspan="4" class="text-center">Không tìm thấy dữ liệu</td></tr>')
                    }
                }
            }
        })
    };

    let onClickMenuRoom = function () {
        $('#btnAllRoom').on('click', function () {
            $('#trangThai').val("");
            configTableRoomAdmin();
        })
        $('#btnBookedRoom').on('click', function () {
            $('#trangThai').val("1");
            configTableRoomAdmin();
        })
        $('#btnLiveRoom').on('click', function () {
            $('#trangThai').val("2");
            configTableRoomAdmin();
        })
        $('#btnEndRoom').on('click', function () {
            $('#trangThai').val("3");
            configTableRoomAdmin();
        })
        $('#btnCancelledRoom').on('click', function () {
            $('#trangThai').val("4");
            configTableRoomAdmin();
        })
        $('#btnWaitRoom').on('click', function () {
            $('#trangThai').val("5");
            configTableRoomAdmin();
        })
    };

    $('#btnCanceledRoomAdmin').on('click', function () {
        $.confirm({
            title: 'Bạn có chắc chắn muốn hủy phòng', content: '', type: 'red', typeAnimated: true,
            buttons: {
                cancel: {
                    text: 'Không',
                    btnClass: 'btn-red',
                },
                confirm: {
                    text: 'Có',
                    btnClass: 'btn-red',
                    action: function () {
                        $.ajax({
                            url: "/updateStatus.do",
                            data: {
                                'idPhong': $('#idPhong').val(),
                                'trangThai': 4
                            },
                            type: "POST",
                            success: function (data) {
                                if (data) {
                                    $.confirm({
                                        title: 'Hủy phòng thành công',
                                        content: '',
                                        type: 'red',
                                        typeAnimated: true,
                                        buttons: {
                                            cancel: {
                                                text: 'Xác nhận',
                                                btnClass: 'btn-red',
                                                action: function () {
                                                    configTableRoomAdmin();
                                                    $('#modalSelectRoom').modal('hide');
                                                }
                                            },
                                        }
                                    });
                                } else {
                                    $.confirm({
                                        title: 'Hủy phòng thất bại',
                                        content: 'Xin vui lòng thử lại hoặc liên hệ ban quản trị',
                                        type: 'red',
                                        typeAnimated: true,
                                        buttons: {
                                            cancel: {
                                                text: 'Thử lại',
                                                btnClass: 'btn-red',
                                            },
                                        }
                                    });
                                }
                            }
                        });
                    }
                },
            }
        });
    })

    $('#btnLiveRoomAdmin').on('click', function () {
        $.confirm({
            title: 'Chuyển trạng thái phòng này sang ĐANG HOẠT ĐỘNG', content: '', type: 'red', typeAnimated: true,
            buttons: {
                cancel: {
                    text: 'Không',
                    btnClass: 'btn-red',
                },
                confirm: {
                    text: 'Có',
                    btnClass: 'btn-red',
                    action: function () {
                        $.ajax({
                            url: "/updateStatus.do",
                            data: {
                                'idPhong': $('#idPhong').val(),
                                'trangThai': 2
                            },
                            type: "POST",
                            success: function (data) {
                                if (data) {
                                    $.confirm({
                                        title: 'Chuyển trạng thái thành công',
                                        content: '',
                                        type: 'red',
                                        typeAnimated: true,
                                        buttons: {
                                            cancel: {
                                                text: 'Xác nhận',
                                                btnClass: 'btn-red',
                                                action: function () {
                                                    configTableRoomAdmin();
                                                    $('#modalSelectRoom').modal('hide');
                                                }
                                            },
                                        }
                                    });
                                } else {
                                    $.confirm({
                                        title: 'Chuyển trạng thái thất bại',
                                        content: 'Xin vui lòng thử lại hoặc liên hệ ban quản trị',
                                        type: 'red',
                                        typeAnimated: true,
                                        buttons: {
                                            cancel: {
                                                text: 'Thử lại',
                                                btnClass: 'btn-red',
                                            },
                                        }
                                    });
                                }
                            }
                        });
                    }
                },
            }
        });
    });

    $('#btnEndRoomAdmin').on('click', function () {
        $.confirm({
            title: 'Chuyển trạng thái phòng này sang KẾT THÚC',
            content: '* Lưu ý kiểm tra lại trang thiết bị đầy đủ',
            type: 'red',
            typeAnimated: true,
            buttons: {
                cancel: {
                    text: 'Không',
                    btnClass: 'btn-red',
                },
                confirm: {
                    text: 'Có',
                    btnClass: 'btn-red',
                    action: function () {
                        $.ajax({
                            url: "/updateStatus.do",
                            data: {
                                'idPhong': $('#idPhong').val(),
                                'trangThai': 3
                            },
                            type: "POST",
                            success: function (data) {
                                if (data) {
                                    $.confirm({
                                        title: 'Chuyển trạng thái thành công',
                                        content: '',
                                        type: 'red',
                                        typeAnimated: true,
                                        buttons: {
                                            cancel: {
                                                text: 'Xác nhận',
                                                btnClass: 'btn-red',
                                                action: function () {
                                                    configTableRoomAdmin();
                                                    $('#modalSelectRoom').modal('hide');
                                                }
                                            },
                                        }
                                    });
                                } else {
                                    $.confirm({
                                        title: 'Chuyển trạng thái thất bại',
                                        content: 'Xin vui lòng thử lại hoặc liên hệ ban quản trị',
                                        type: 'red',
                                        typeAnimated: true,
                                        buttons: {
                                            cancel: {
                                                text: 'Thử lại',
                                                btnClass: 'btn-red',
                                            },
                                        }
                                    });
                                }
                            }
                        });
                    }
                },
            }
        });
    });

    $('#btnBookedRoomAdmin').on('click', function () {
        $.confirm({
            title: 'Chuyển trạng thái phòng này sang ĐANG ĐẶT', content: '', type: 'red', typeAnimated: true,
            buttons: {
                cancel: {
                    text: 'Không',
                    btnClass: 'btn-red',
                },
                confirm: {
                    text: 'Có',
                    btnClass: 'btn-red',
                    action: function () {
                        $.ajax({
                            url: "/updateStatus.do",
                            data: {
                                'idPhong': $('#idPhong').val(),
                                'trangThai': 1
                            },
                            type: "POST",
                            success: function (data) {
                                if (data) {
                                    $.confirm({
                                        title: 'Chuyển trạng thái thành công',
                                        content: '',
                                        type: 'red',
                                        typeAnimated: true,
                                        buttons: {
                                            cancel: {
                                                text: 'Xác nhận',
                                                btnClass: 'btn-red',
                                                action: function () {
                                                    configTableRoomAdmin();
                                                    $('#modalSelectRoom').modal('hide');
                                                }
                                            },
                                        }
                                    });
                                } else {
                                    $.confirm({
                                        title: 'Chuyển trạng thái thất bại',
                                        content: 'Xin vui lòng thử lại hoặc liên hệ ban quản trị',
                                        type: 'red',
                                        typeAnimated: true,
                                        buttons: {
                                            cancel: {
                                                text: 'Thử lại',
                                                btnClass: 'btn-red',
                                            },
                                        }
                                    });
                                }
                            }
                        });
                    }
                },
            }
        });
    });

    $('#btnEndRoomAdmin').on('click', function () {
        $.confirm({
            title: 'Chuyển trạng thái phòng này sang KẾT THÚC',
            content: '* Lưu ý kiểm tra lại trang thiết bị đầy đủ',
            type: 'red',
            typeAnimated: true,
            buttons: {
                cancel: {
                    text: 'Không',
                    btnClass: 'btn-red',
                },
                confirm: {
                    text: 'Có',
                    btnClass: 'btn-red',
                    action: function () {
                        $.ajax({
                            url: "/updateStatus.do",
                            data: {
                                'idPhong': $('#idPhong').val(),
                                'trangThai': 3
                            },
                            type: "POST",
                            success: function (data) {
                                if (data) {
                                    $.confirm({
                                        title: 'Chuyển trạng thái thành công',
                                        content: '',
                                        type: 'red',
                                        typeAnimated: true,
                                        buttons: {
                                            cancel: {
                                                text: 'Xác nhận',
                                                btnClass: 'btn-red',
                                                action: function () {
                                                    configTableRoomAdmin();
                                                    $('#modalSelectRoom').modal('hide');
                                                }
                                            },
                                        }
                                    });
                                } else {
                                    $.confirm({
                                        title: 'Chuyển trạng thái thất bại',
                                        content: 'Xin vui lòng thử lại hoặc liên hệ ban quản trị',
                                        type: 'red',
                                        typeAnimated: true,
                                        buttons: {
                                            cancel: {
                                                text: 'Thử lại',
                                                btnClass: 'btn-red',
                                            },
                                        }
                                    });
                                }
                            }
                        });
                    }
                },
            }
        });
    });

    $('#btnDeleteRoomAdmin').on('click', function () {
        $.confirm({
            title: 'Bạn có chắc chắn muốn xóa phòng', content: '', type: 'red', typeAnimated: true,
            buttons: {
                cancel: {
                    text: 'Không',
                    btnClass: 'btn-red',
                },
                confirm: {
                    text: 'Có',
                    btnClass: 'btn-red',
                    action: function () {
                        $.ajax({
                            url: "/deleteRoom.do",
                            data: {
                                'idPhong': $('#idPhong').val(),
                            },
                            type: "POST",
                            success: function (data) {
                                if (data) {
                                    $.confirm({
                                        title: 'Xóa phòng thành công',
                                        content: '',
                                        type: 'red',
                                        typeAnimated: true,
                                        buttons: {
                                            cancel: {
                                                text: 'Xác nhận',
                                                btnClass: 'btn-red',
                                                action: function () {
                                                    configTableRoomAdmin();
                                                    $('#modalSelectRoom').modal('hide');
                                                }
                                            },
                                        }
                                    });
                                } else {
                                    $.confirm({
                                        title: 'Xóa phòng thất bại',
                                        content: 'Xin vui lòng thử lại hoặc liên hệ ban quản trị',
                                        type: 'red',
                                        typeAnimated: true,
                                        buttons: {
                                            cancel: {
                                                text: 'Thử lại',
                                                btnClass: 'btn-red',
                                            },
                                        }
                                    });
                                }
                            }
                        });
                    }
                },
            }
        });
    });

    /**
     * REPORT BUSINESS LOGIC
     * @Create 31/07/2018
     * @Auth Nhựt nguyễn
     * */

    let datePicker = function () {
        $('.datepicker').datepicker({
            format: 'dd/mm/yyyy',
        })
    };

    let getCurrentDate = function () {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        var today = dd + '/' + mm + '/' + yyyy;
        $('#dateStartRoom, #dateEndRoom, #dateStartDate, #dateEndDate').val(today);
    };

    this.onClickFilterDate = function () {
        $.ajax({
            url: "/selectReportToday.do",
            data: {
                ngayBatDau: $('#dateStartDate').val(),
                ngayKetThuc: $('#dateEndDate').val()
            },
            type: "POST",
            success: function (data) {
                if (data) {
                    $.each(data, function (index, item) {
                        $('#roomRegisted, #tblRoomRegisted').text(item.soLanDangKyPhong);
                        $('#roomWaited, #tblRoomWaited').text(item.soPhongDangChoDuyet);
                        $('#roomFinished, #tblRoomFinished').text(item.soPhongDaKetThuc);
                        $('#roomActive, #tblRoomActive').text(item.soPhongDangHoatDong);
                        $('#roomCanceled, #tblRoomCanceled').text(item.soPhongDaHuy);
                        $('#roomPopular').text('Phòng ' + item.phongSuDungNhieu + ' (' + item.soLanDangKyPhongSuDungNhieu + ' lần)');
                        $('#userUsings, #tblUserUsings').text(item.tongSoNguoiSuDung);
                        $('#tblRoomPopular').text('Phòng ' + item.phongSuDungNhieu + ' [' + item.soLanDangKyPhongSuDungNhieu + ' lần]')
                        return false;
                    });
                }
                $('#tblCloneReportToday').tableExport({}).reset();
                $('#tblCloneReportToday caption').find('button').css('display', 'none');
            }
        })
    };

    this.onClickExportExcelToday = function () {
        $('#tblCloneReportToday caption').find('button').trigger('click');
    };

    let selectCategoryRoom = function () {
        $.ajax({
            url: "/selectListRoom.do",
            type: "POST",
            success: function (data) {
                if (data) {
                    let html = '<option value="0">Tất cả</option>';
                    $.each(data, function (i) {
                        html += '<option value="' + data[i]["idDmPhong"] + '">Phòng ' + data[i]["tenPhong"] + '</option>';
                    })
                    $('#selRoom').html(html);
                }
            }
        });
    };

    this.onClickFilterRoom = function () {
        $('#bodyReportRoom tr').remove();
        let ngayBatDau = $('#dateStartRoom').val();
        let ngayKetThuc = $('#dateEndRoom').val();
        let idDmPhong = $('#selRoom option:selected').val();
        if (idDmPhong != 0) {
            $.ajax({
                url: "/selectReportRoom.do",
                data: {
                    idDmPhong: idDmPhong,
                    ngayBatDau: ngayBatDau,
                    ngayKetThuc: ngayKetThuc,
                },
                type: "POST",
                success: function (data) {
                    if (data) {
                        let html = '';
                        $.each(data, function (index, item) {
                            if (item.tenPhong) {
                                html += '<tr>';
                                html += '<td>' + item.tenPhong + '</td>'
                                html += '<td class="text-center">' + item.soLanDangKyPhong + '</td>'
                                html += '<td class="text-center">' + item.tongSoLanSuDung + '</td>'
                                html += '<td class="text-center">' + item.soPhongDaHuy + '</td>'
                                html += '<td class="text-center">' + item.tongSoNguoiSuDung + '</td>'
                                html += '</tr>';
                                $('#bodyReportRoom').html(html);
                                $.ajax({
                                    url: "/selectReportRoomDetail.do",
                                    data: {
                                        idDmPhong: idDmPhong,
                                        ngayBatDau: ngayBatDau,
                                        ngayKetThuc: ngayKetThuc,
                                    },
                                    type: "POST",
                                    success: function (data) {
                                        if (data) {
                                            let htmlDetail = '';
                                            $.each(data, function (index, item) {
                                                htmlDetail += '<tr>';
                                                htmlDetail += '<td>' + (index + 1) + '</td>'
                                                htmlDetail += '<td class="text-center">' + item.tenPhong + '</td>'
                                                htmlDetail += '<td class="text-center">' + item.ngay + '</td>'
                                                htmlDetail += '<td class="text-center">' + item.gioBatDau + '</td>'
                                                htmlDetail += '<td class="text-center">' + item.gioKetThuc + '</td>'
                                                htmlDetail += '<td class="text-center">' + item.trangThai + '</td>'
                                                htmlDetail += '<td class="text-center">' + item.soNguoi + '</td>'
                                                htmlDetail += '</tr>';
                                                $('#bodyReportRoomDetail').html(htmlDetail);
                                            })
                                        }
                                    }
                                });
                            } else {
                                $('#bodyReportRoom').html('<tr><td class="text-center" colspan="5">Không có dữ liệu</td></tr>');
                                $('#bodyReportRoomDetail').html('<tr><td class="text-center" colspan="7">Không có dữ liệu</td></tr>');
                            }
                            return false;
                        })
                    }
                }
            });
        } else {
            $.ajax({
                url: "/selectReportRoomDetailAll.do",
                data: {
                    ngayBatDau: ngayBatDau,
                    ngayKetThuc: ngayKetThuc,
                },
                type: "POST",
                success: function (data) {
                    if (data) {
                        let htmlDetail = '';
                        $.each(data, function (index, item) {
                            htmlDetail += '<tr>';
                            htmlDetail += '<td>' + (index + 1) + '</td>'
                            htmlDetail += '<td class="text-center">' + item.tenPhong + '</td>'
                            htmlDetail += '<td class="text-center">' + item.ngay + '</td>'
                            htmlDetail += '<td class="text-center">' + item.gioBatDau + '</td>'
                            htmlDetail += '<td class="text-center">' + item.gioKetThuc + '</td>'
                            htmlDetail += '<td class="text-center">' + item.trangThai + '</td>'
                            htmlDetail += '<td class="text-center">' + item.soNguoi + '</td>'
                            htmlDetail += '</tr>';
                            $('#bodyReportRoomDetail').html(htmlDetail);
                        })
                    }
                }
            });
            $.ajax({
                url: "/selectListRoom.do",
                type: "POST",
                success: function (data) {
                    if (data) {
                        $.each(data, function (index, item) {
                            let idDmPhong = item.idDmPhong;
                            let tenPhong = item.tenPhong;
                            let htmlReportRoomAll = '';
                            $.ajax({
                                url: "/selectReportRoom.do",
                                data: {
                                    idDmPhong: idDmPhong,
                                    ngayBatDau: ngayBatDau,
                                    ngayKetThuc: ngayKetThuc,
                                },
                                type: "POST",
                                success: function (data) {
                                    if (data) {
                                        $.each(data, function (ind, ite) {
                                            htmlReportRoomAll += '<tr>';
                                            htmlReportRoomAll += '<td>'+ tenPhong +'</td>'
                                            if (ite.tenPhong) {
                                                htmlReportRoomAll += '<td class="text-center">' + ite.soLanDangKyPhong + '</td>'
                                                htmlReportRoomAll += '<td class="text-center">' + ite.tongSoLanSuDung + '</td>'
                                                htmlReportRoomAll += '<td class="text-center">' + ite.soPhongDaHuy + '</td>'
                                                htmlReportRoomAll += '<td class="text-center">' + ite.tongSoNguoiSuDung + '</td>'
                                            } else {
                                                htmlReportRoomAll += '<td class="text-center">0</td>'
                                                htmlReportRoomAll += '<td class="text-center">0</td>'
                                                htmlReportRoomAll += '<td class="text-center">0</td>'
                                                htmlReportRoomAll += '<td class="text-center">0</td>'
                                            }
                                            htmlReportRoomAll += '</tr>';
                                            $('#bodyReportRoom').append(htmlReportRoomAll);
                                        })
                                    }
                                }
                            })
                        })
                    }
                }
            });
        }
    };

    return setup();
});