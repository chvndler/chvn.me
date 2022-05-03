import timeline from '@/projects/timeline.json';
import Link from 'next/link';
import { styled } from 'stitches.config';

interface TimelineEntries {
  [key: string]: [
    {
      date: Date;
      url: string;
      title: string;
      description: string;
    },
  ];
}

const Table = styled('table', {
  fontFamily: 'inherit',
  width: '100%',
  borderCollapse: 'initial',
  WebkitBorderHorizontalSpacing: '0',
});

const TableBody = styled('div', {});

const Description = styled('p', {
  fontFamily: '$inter',
  fontSize: '14px',
  fontWeight: '400',
});
const Year = styled('div', {
  fontFamily: '$inter',
  fontSize: '15px',
  fontWeight: '600',
  paddingRight: '10px',
});

export const Timeline = () => {
  const orderedData = timeline
    .map(entry => ({ ...entry, date: new Date(entry.date) }))
    .sort((a, b) => a.date.valueOf() - b.date.valueOf())
    .reduce<TimelineEntries>((sections, currentValue) => {
      const year = currentValue.date.getFullYear().toString();
      if (sections[year] != undefined) {
        sections[year].push(currentValue);
      } else {
        sections[year] = [currentValue];
      }

      return sections;
    }, {});

  return (
    <>
      <Table>
        <tbody>
          {Object.keys(orderedData)
            .sort()
            .reverse()
            .map(year => {
              return orderedData[year].map((entry, index) => (
                <tr key={`${year}-${index}`}>
                  {index === 0 ? (
                    <th>
                      <Year>{year}</Year>
                    </th>
                  ) : (
                    <td />
                  )}
                  <td>
                    <Link href={entry.url}>{entry.title}</Link>

                    <Description>{entry.description}</Description>
                  </td>
                </tr>
              ));
            })}
        </tbody>
      </Table>
    </>
  );
};
