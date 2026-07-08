import { Document, Page, View, Text, Link, StyleSheet } from "@react-pdf/renderer";
import { experiencesData, skillsData } from "@/lib/data";
import { dictionaries, type Language } from "@/lib/i18n";
import { calculateDuration } from "@/lib/utils";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#1a1a1a",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
  },
  jobTitle: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    marginTop: 2,
    letterSpacing: 1,
  },
  contactBlock: {
    alignItems: "flex-end",
  },
  contactLine: {
    fontSize: 9,
    marginBottom: 2,
  },
  sectionHeading: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    marginTop: 10,
    marginBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    paddingBottom: 3,
  },
  paragraph: {
    lineHeight: 1.3,
    marginTop: 3,
  },
  twoColumnRow: {
    flexDirection: "row",
    gap: 24,
  },
  column: {
    flex: 1,
  },
  bulletItem: {
    flexDirection: "row",
    marginBottom: 2,
  },
  bulletDot: {
    width: 10,
  },
  experienceItem: {
    marginBottom: 7,
  },
  experienceHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  experienceTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 11,
  },
  experienceMeta: {
    fontSize: 9,
    color: "#444444",
    marginBottom: 3,
  },
  experiencePeriod: {
    fontSize: 9,
    fontFamily: "Helvetica-Oblique",
  },
  techLine: {
    fontSize: 9,
    color: "#444444",
    marginTop: 3,
  },
  educationRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export function CvDocument({ language }: { language: Language }) {
  const t = dictionaries[language];
  const hardSkills = skillsData.map((s) => s.skill);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.name}>João Victor Pedrosa</Text>
            <Text style={styles.jobTitle}>{t.cv.jobTitle.toUpperCase()}</Text>
          </View>
          <View style={styles.contactBlock}>
            <Text style={styles.contactLine}>jotavpedrosa@gmail.com</Text>
            <Link
              style={styles.contactLine}
              src="https://www.linkedin.com/in/joao-victor-pedrosa-candido/"
            >
              LinkedIn
            </Link>
            <Link style={styles.contactLine} src="https://github.com/JvPedrosa">
              GitHub
            </Link>
            <Text style={styles.contactLine}>{t.cv.location}</Text>
          </View>
        </View>

        <Text style={styles.paragraph}>{t.cv.profileSummary}</Text>

        <View style={styles.twoColumnRow}>
          <View style={styles.column}>
            <Text style={styles.sectionHeading}>{t.cv.hardSkillsHeading}</Text>
            {hardSkills.map((skill) => (
              <View style={styles.bulletItem} key={skill}>
                <Text style={styles.bulletDot}>•</Text>
                <Text>{skill}</Text>
              </View>
            ))}
          </View>
          <View style={styles.column}>
            <Text style={styles.sectionHeading}>{t.cv.softSkillsHeading}</Text>
            {t.cv.softSkills.map((skill) => (
              <View style={styles.bulletItem} key={skill}>
                <Text style={styles.bulletDot}>•</Text>
                <Text>{skill}</Text>
              </View>
            ))}
          </View>
        </View>

        <Text style={styles.sectionHeading}>{t.cv.experienceHeading}</Text>
        {experiencesData.map((experience) => {
          const text = t.experiences[experience.id];
          const duration = experience.startDate
            ? calculateDuration(experience.startDate, language)
            : text.duration;

          return (
            <View style={styles.experienceItem} key={experience.id} wrap={false}>
              <View style={styles.experienceHeaderRow}>
                <Text style={styles.experienceTitle}>
                  {text.title} - {experience.company}
                </Text>
                <Text style={styles.experiencePeriod}>
                  {text.period} ({duration})
                </Text>
              </View>
              <Text style={styles.experienceMeta}>{text.location}</Text>
              <Text style={styles.paragraph}>{text.description}</Text>
              <Text style={styles.techLine}>
                {experience.skills.join(", ")}
              </Text>
            </View>
          );
        })}

        <Text style={styles.sectionHeading}>{t.cv.educationHeading}</Text>
        <View style={styles.educationRow}>
          <Text>
            {t.cv.education.degree} - {t.cv.education.institution}
          </Text>
          <Text style={styles.experiencePeriod}>{t.cv.education.period}</Text>
        </View>

        <Text style={styles.sectionHeading}>{t.cv.languagesHeading}</Text>
        {t.cv.languages.map((lang) => (
          <Text key={lang.name}>
            {lang.name} - {lang.level}
          </Text>
        ))}
      </Page>
    </Document>
  );
}
