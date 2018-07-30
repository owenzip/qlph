/**
 * @DNTU-LIBRARY application
 * @author Nhựt Nguyễn
 * @since 15/04/2018
 */
$(function () {
    let setup = function () {
        onClickConvertTab();
        onClickMenuRoom();
        configTableContactAdmin();
        configTableRoomAdmin();
    };

    let onClickConvertTab = function () {
        $('#formTabRoom,#formTabCategory,#formTabStatis').hide();
        $('.btnTabRoom').on('click', function () {
            $('#formTabRoom').show();
            $('#formTabCategory,#formTabStatis,#formTabMail').hide();
        })
        $('.btnTabCategory').on('click', function () {
            $('#formTabCategory').show();
            $('#formTabRoom,#formTabStatis,#formTabMail').hide();
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
                        $('#tblRoomAdmin').html('<tr><td colspan="8" class="text-center">Không tìm thấy dữ liệu</td></tr>')
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
    })

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
    })

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
    })

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
    })

    return setup();
});