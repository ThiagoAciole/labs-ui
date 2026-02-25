import React, { useRef, useState } from 'react';
import './FileUpload.css';
import { Icon } from '../../Typography/Icon/Icon';
import { classNames } from '../../../utils/classNames';

interface FileUploadProps {
    onFileSelect?: (files: File[]) => void;
    accept?: string;
    multiple?: boolean;
    disabled?: boolean;
    maxSize?: number; // em bytes
    title?: string;
    description?: string;
    className?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({
    onFileSelect,
    accept,
    multiple = false,
    disabled = false,
    maxSize,
    title = 'Arraste e solte o arquivo ou clique',
    description = 'Arquivos suportados: JPEG, PNG, PDF',
    className
}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [files, setFiles] = useState<File[]>([]);
    const [error, setError] = useState<string | null>(null);

    const handleDragEnter = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (!disabled) setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        if (disabled) return;

        const droppedFiles = Array.from(e.dataTransfer.files);
        processFiles(droppedFiles);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const selectedFiles = Array.from(e.target.files);
            processFiles(selectedFiles);
        }
    };

    const processFiles = (newFiles: File[]) => {
        setError(null);
        let validFiles = newFiles;

        if (maxSize) {
            const oversized = newFiles.filter(f => f.size > maxSize);
            if (oversized.length > 0) {
                setError(`Alguns arquivos excedem o limite de ${Math.round(maxSize / 1024 / 1024)}MB`);
                validFiles = newFiles.filter(f => f.size <= maxSize);
            }
        }

        if (!multiple && files.length + validFiles.length > 1) {
            validFiles = [validFiles[0]];
        }

        const updatedFiles = multiple ? [...files, ...validFiles] : validFiles;
        setFiles(updatedFiles);
        onFileSelect?.(updatedFiles);
    };

    const removeFile = (e: React.MouseEvent, index: number) => {
        e.stopPropagation();
        const updatedFiles = files.filter((_, i) => i !== index);
        setFiles(updatedFiles);
        onFileSelect?.(updatedFiles);
    };

    return (
        <div className={classNames('file-upload', className)}>
            <div
                className={classNames('file-upload__dropzone', {
                    'file-upload__dropzone--dragging': isDragging,
                    'file-upload__dropzone--disabled': disabled,
                    'file-upload__dropzone--error': !!error
                })}
                onDragEnter={handleDragEnter}
                onDragOver={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => inputRef.current?.click()}
            >
                <input
                    ref={inputRef}
                    type="file"
                    className="file-upload__input"
                    onChange={handleFileChange}
                    accept={accept}
                    multiple={multiple}
                    disabled={disabled}
                />

                <div className="file-upload__content">
                    <div className="file-upload__icon">
                        <Icon name="upload" size={32} />
                    </div>
                    <span className="file-upload__title">{title}</span>
                    <span className="file-upload__description">{description}</span>
                </div>
            </div>

            {error && <span className="file-upload__error-text">{error}</span>}

            {files.length > 0 && (
                <ul className="file-upload__list">
                    {files.map((file, idx) => (
                        <li key={`${file.name}-${idx}`} className="file-upload__item">
                            <span className="file-upload__file-info">
                                <Icon name="lab" size={16} />
                                <span className="file-upload__file-name">{file.name}</span>
                                <span className="file-upload__file-size">
                                    ({Math.round(file.size / 1024)} KB)
                                </span>
                            </span>
                            <button
                                type="button"
                                className="file-upload__remove-btn"
                                onClick={(e) => removeFile(e, idx)}
                            >
                                <Icon name="trash" size={16} />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};





