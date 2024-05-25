import type {ErrorMessage} from 'valibot';

export type Language = {
    code:
        | 'ar'
        | 'de'
        | 'en'
        | 'es'
        | 'fr'
        | 'hu'
        | 'it'
        | 'ja'
        | 'kr'
        | 'nb'
        | 'nl'
        | 'pt'
        | 'ro'
        | 'ru'
        | 'sl'
        | 'tr'
        | 'uk'
        | 'zh-CN'
        | 'zh-TW';
    schema: ErrorMessage;
    specific: {
        bic: ErrorMessage;
        bytes: ErrorMessage;
        creditCard: ErrorMessage;
        cuid2: ErrorMessage;
        custom: ErrorMessage;
        customAsync: ErrorMessage;
        decimal: ErrorMessage;
        email: ErrorMessage;
        emoji: ErrorMessage;
        endsWith: ErrorMessage;
        excludes: ErrorMessage;
        finite: ErrorMessage;
        hash: ErrorMessage;
        hexColor: ErrorMessage;
        hexadecimal: ErrorMessage;
        imei: ErrorMessage;
        includes: ErrorMessage;
        integer: ErrorMessage;
        ip: ErrorMessage;
        ipv4: ErrorMessage;
        ipv6: ErrorMessage;
        isoDate: ErrorMessage;
        isoDateTime: ErrorMessage;
        isoTime: ErrorMessage;
        isoTimeSecond: ErrorMessage;
        isoTimestamp: ErrorMessage;
        isoWeek: ErrorMessage;
        length: ErrorMessage;
        mac: ErrorMessage;
        mac48: ErrorMessage;
        mac64: ErrorMessage;
        maxBytes: ErrorMessage;
        maxLength: ErrorMessage;
        maxSize: ErrorMessage;
        maxValue: ErrorMessage;
        mimeType: ErrorMessage;
        minBytes: ErrorMessage;
        minLength: ErrorMessage;
        minSize: ErrorMessage;
        minValue: ErrorMessage;
        multipleOf: ErrorMessage;
        notBytes: ErrorMessage;
        notLength: ErrorMessage;
        notSize: ErrorMessage;
        notValue: ErrorMessage;
        octal: ErrorMessage;
        regex: ErrorMessage;
        safeInteger: ErrorMessage;
        size: ErrorMessage;
        startsWith: ErrorMessage;
        ulid: ErrorMessage;
        url: ErrorMessage;
        uuid: ErrorMessage;
        value: ErrorMessage;
    };
};
