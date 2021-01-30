import React from "react";
import $ from "jquery";
import * as datepicker from "jquery-datetimepicker";
import 'jquery-datetimepicker/jquery.datetimepicker.css'
export class DatePicker extends React.Component
{
    componentDidMount() {
        this.$el = $(this.el);
        this.$el.datetimepicker();
    }

    componentWillUnmount() {
        this.$el.datetimepicker('destroy');
    }
    render() {
        return (
            <div>
                <input ref={el => this.el = el} id="datetimepicker" type="text" />
            </div>
        )
    }
}