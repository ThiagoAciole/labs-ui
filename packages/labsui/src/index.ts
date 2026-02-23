/* ============================================================
   LabsUI – Main Entry: tokens + base styles
   ============================================================ */

/* Design Tokens */
import './styles/tokens.css';

/* Theme Provider */
export { ThemeProvider, useTheme } from './components/ThemeProvider/ThemeProvider';
export type { Theme } from './components/ThemeProvider/ThemeProvider';

/* Base */
import './styles/base.css';

/* ── Utilities ── */
export { classNames } from './utils/classNames';
export { createVariants } from './utils/variants';

/* ── Typography ── */
export { Text } from './components/Text/Text';
export type { TextProps } from './components/Text/Text';
export { Heading } from './components/Heading/Heading';
export type { HeadingProps } from './components/Heading/Heading';
export { Link } from './components/Link/Link';
export type { LinkProps, LinkVariant } from './components/Link/Link';

/* ── Icons ── */
export { Icon, availableIcons } from './components/Icon/Icon';
export type { IconProps, IconName } from './components/Icon/Icon';

/* ── Components ── */
export { Button } from './components/Button/Button';
export type { ButtonProps, ButtonVariant, ButtonSize } from './components/Button/Button';

export { IconButton } from './components/IconButton/IconButton';
export type { IconButtonProps, IconButtonVariant, IconButtonSize } from './components/IconButton/IconButton';

export { Input } from './components/Input/Input';
export type { InputProps, InputSize } from './components/Input/Input';

export { Search } from './components/Search/Search';
export type { SearchProps } from './components/Search/Search';

export { TextArea } from './components/TextArea/TextArea';
export type { TextAreaProps } from './components/TextArea/TextArea';

export { Select } from './components/Select/Select';
export type { SelectProps, SelectOption, SelectSize } from './components/Select/Select';

export { Checkbox } from './components/Checkbox/Checkbox';
export type { CheckboxProps } from './components/Checkbox/Checkbox';

export { Switch } from './components/Switch/Switch';
export type { SwitchProps, SwitchSize } from './components/Switch/Switch';

export { Badge } from './components/Badge/Badge';
export type { BadgeProps, BadgeVariant, BadgeSize } from './components/Badge/Badge';

export { Tag } from './components/Tag/Tag';
export type { TagProps, TagVariant, TagSize } from './components/Tag/Tag';

export { Card, CardHeader, CardBody, CardFooter } from './components/Card/Card';
export type { CardProps, CardHeaderProps, CardPadding, CardVariant } from './components/Card/Card';

export { Modal } from './components/Modal/Modal';
export type { ModalProps, ModalSize } from './components/Modal/Modal';

export { Tooltip } from './components/Tooltip/Tooltip';
export type { TooltipProps, TooltipPlacement } from './components/Tooltip/Tooltip';

export { Tabs } from './components/Tabs/Tabs';
export type { TabsProps, TabItem } from './components/Tabs/Tabs';

export { DropdownMenu } from './components/DropdownMenu/DropdownMenu';
export type { DropdownMenuProps, DropdownMenuItem, DropdownPlacement } from './components/DropdownMenu/DropdownMenu';

export { ToastProvider, useToast } from './components/Toast/Toast';
export type { ToastProviderProps, ToastData, ToastVariant, ToastPosition } from './components/Toast/Toast';

export { Loader } from './components/Loader/Loader';
export type { LoaderProps, LoaderSize, LoaderVariant } from './components/Loader/Loader';

export { Divider } from './components/Divider/Divider';
export type { DividerProps } from './components/Divider/Divider';

export { TopBar } from './components/TopBar/TopBar';
export { ThemeToggle } from './components/TopBar/ThemeToggle';
export type { TopBarProps, TopBarNavItem } from './components/TopBar/TopBar';

export { PageHeader } from './components/PageHeader/PageHeader';
export type { PageHeaderProps } from './components/PageHeader/PageHeader';

export { DatePicker } from './components/DatePicker/DatePicker';
export type { DatePickerProps } from './components/DatePicker/DatePicker';

/* ── New Components ── */
export { Avatar } from './components/Avatar/Avatar';
export type { AvatarProps, AvatarSize, AvatarShape } from './components/Avatar/Avatar';

export { Table, Thead, Tbody, Tr, Th, Td } from './components/Table/Table';
export type { TableProps } from './components/Table/Table';

export { Drawer } from './components/Drawer/Drawer';
export type { DrawerProps, DrawerPlacement } from './components/Drawer/Drawer';

export { Pagination } from './components/Pagination/Pagination';
export type { PaginationProps } from './components/Pagination/Pagination';

export { Progress } from './components/Progress/Progress';
export type { ProgressProps, ProgressVariant, ProgressSize } from './components/Progress/Progress';

export { Slider } from './components/Slider/Slider';
export type { SliderProps } from './components/Slider/Slider';

export { Skeleton } from './components/Skeleton/Skeleton';
export type { SkeletonProps } from './components/Skeleton/Skeleton';

export { Timeline, TimelineItem } from './components/Timeline/Timeline';
export type { TimelineProps, TimelineItemProps } from './components/Timeline/Timeline';

export { Spacer } from './components/Spacer/Spacer';
export { Container } from './components/Container/Container';
export { Flex } from './components/Flex/Flex';
export { Grid } from './components/Grid/Grid';
export { Sidebar } from './components/Sidebar/Sidebar';
export type { SidebarProps, SidebarHeaderProps, SidebarNavProps, SidebarItemProps, SidebarGroupProps, SidebarFooterProps, SidebarUserProps } from './components/Sidebar/Sidebar';
export { Image } from './components/Image/Image';
export { List, ListItem } from './components/List/List';
export { Accordion, AccordionItem } from './components/Accordion/Accordion';
export { Breadcrumb } from './components/Breadcrumb/Breadcrumb';
export type { BreadcrumbItem } from './components/Breadcrumb/Breadcrumb';
export { Radio } from './components/Radio/Radio';
export type { RadioProps } from './components/Radio/Radio';
export { MultiSelect } from './components/MultiSelect/MultiSelect';
export type { MultiSelectOption } from './components/MultiSelect/MultiSelect';
export { FileUpload } from './components/FileUpload/FileUpload';
export { EmptyState } from './components/EmptyState/EmptyState';
