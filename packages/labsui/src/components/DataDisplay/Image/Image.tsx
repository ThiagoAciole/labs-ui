import React, { useState } from 'react';
import './Image.css';
import { classNames } from '../../../utils/classNames';
import { Skeleton } from '../../Feedback/Skeleton/Skeleton';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
    radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
    fallback?: React.ReactNode;
}

export const Image: React.FC<ImageProps> = ({
    src,
    alt,
    objectFit = 'cover',
    radius = 'md',
    className,
    style,
    fallback,
    ...props
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    if (hasError && fallback) {
        return <>{fallback}</>;
    }

    return (
        <div className={classNames('labs-image__wrapper', className)} style={style}>
            {!isLoaded && !hasError && (
                <Skeleton
                    width="100%"
                    height="100%"
                    className={`labs-image__skeleton labs-image__radius--${radius}`}
                />
            )}
            <img
                src={src}
                alt={alt}
                className={classNames(
                    'labs-image',
                    `labs-image__fit--${objectFit}`,
                    `labs-image__radius--${radius}`,
                    { 'labs-image--loaded': isLoaded }
                )}
                onLoad={() => setIsLoaded(true)}
                onError={() => setHasError(true)}
                {...props}
            />
        </div>
    );
};





