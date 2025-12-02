package edu.wgu.d387_sample_code.service;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

public class TimeZoneConversion {

    private static final ZoneId EASTERN = ZoneId.of("America/New_York");
    private static final ZoneId MOUNTAIN = ZoneId.of("America/Denver");
    private static final ZoneId UTC = ZoneId.of("UTC");

    private static final DateTimeFormatter FORMATTER = DateTimeFormatter.ofPattern("HH:mm");

    public static String convertPresentationTime(int hour, int minute) {
        ZonedDateTime baseTime = ZonedDateTime.now(EASTERN)
                .withHour(hour)
                .withMinute(minute)
                .withSecond(0)
                .withNano(0);

        ZonedDateTime mtTime = baseTime.withZoneSameInstant(MOUNTAIN);
        ZonedDateTime utcTime = baseTime.withZoneSameInstant(UTC);

        return String.format("ET: %s, MT: %s, UTC: %s",
                baseTime.format(FORMATTER),
                mtTime.format(FORMATTER),
                utcTime.format(FORMATTER));
    }

    public static String getPresentationTime() {
        String times = convertPresentationTime(14, 30);
        return "Online presentation starts at " + times;
    }
}