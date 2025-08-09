export default function RecentFiles({ files }: { files: any[] }) {
    return (
      <div className="...">
        {files.length ? (
          <ul>
            {files.map((file, i) => (
              <li key={i}>{file.name}</li>
            ))}
          </ul>
        ) : (
          <p>No recent files</p>
        )}
      </div>
    );
  }
  