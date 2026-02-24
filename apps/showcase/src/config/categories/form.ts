import type { ComponentGroup } from '../componentTypes';
import ButtonPage from '../../pages/Form/ButtonPage';
import IconButtonPage from '../../pages/Form/IconButtonPage';
import InputPage from '../../pages/Form/InputPage';
import TextAreaPage from '../../pages/Form/TextAreaPage';
import SearchPage from '../../pages/Form/SearchPage';
import SelectPage from '../../pages/Form/SelectPage';
import MultiSelectPage from '../../pages/Form/MultiSelectPage';
import CheckboxPage from '../../pages/Form/CheckboxPage';
import RadioPage from '../../pages/Form/RadioPage';
import SwitchPage from '../../pages/Form/SwitchPage';
import SliderPage from '../../pages/Form/SliderPage';
import DatePickerPage from '../../pages/Form/DatePickerPage';
import FileUploadPage from '../../pages/Form/FileUploadPage';

export const formComponents: ComponentGroup = {
    title: 'Form',
    icon: 'form-input',
    items: [
        { id: 'button', name: 'Button', icon: 'rectangle-horizontal', component: ButtonPage },
        { id: 'icon-button', name: 'IconButton', icon: 'mouse-pointer', component: IconButtonPage },
        { id: 'input', name: 'Input', icon: 'text-cursor', component: InputPage },
        { id: 'textarea', name: 'TextArea', icon: 'form-input', component: TextAreaPage },
        { id: 'search', name: 'Search', icon: 'search', component: SearchPage },
        { id: 'select', name: 'Select', icon: 'list-filter', component: SelectPage },
        { id: 'multiselect', name: 'MultiSelect', icon: 'list-checks', component: MultiSelectPage },
        { id: 'checkbox', name: 'Checkbox', icon: 'check-square', component: CheckboxPage },
        { id: 'radio', name: 'Radio', icon: 'circle-dot', component: RadioPage },
        { id: 'switch', name: 'Switch', icon: 'toggle-right', component: SwitchPage },
        { id: 'slider', name: 'Slider', icon: 'sliders-horizontal', component: SliderPage },
        { id: 'datepicker', name: 'DatePicker', icon: 'calendar', component: DatePickerPage },
        { id: 'fileupload', name: 'FileUpload', icon: 'upload-cloud', component: FileUploadPage }
    ]
};



